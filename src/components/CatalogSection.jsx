import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, ShieldCheck, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useRfq } from '../context/RfqContext';

export default function CatalogSection({ onGoToContact }) {
  const { addToCart, setIsDrawerOpen } = useRfq();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('savings');
  const [addedIds, setAddedIds] = useState({});
  const [quantities, setQuantities] = useState({});

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'savings') {
        const savA = (a.marketPrice - a.deltaPrice) / a.marketPrice;
        const savB = (b.marketPrice - b.deltaPrice) / b.marketPrice;
        return savB - savA;
      }
      if (sortBy === 'price-low') {
        return a.deltaPrice - b.deltaPrice;
      }
      if (sortBy === 'price-high') {
        return b.deltaPrice - a.deltaPrice;
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAdd = (product) => {
    const qty = quantities[product.id] || 5;
    addToCart(product, qty);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const handleQtyChange = (id, val) => {
    const num = Math.max(1, Math.min(200, parseInt(val) || 1));
    setQuantities((prev) => ({ ...prev, [id]: num }));
  };

  const getBadgeStyle = (badge) => {
    if (!badge) return '';
    if (badge === 'Best Seller' || badge === 'Top Pick') {
      return 'bg-amber-400 text-slate-950';
    }
    if (badge === 'Premium Grade' || badge === 'Jumbo Size') {
      return 'bg-cyan-500 text-slate-950';
    }
    if (badge === 'Lab Certified' || badge === 'Pure Cold Pressed' || badge === 'Pure Quality') {
      return 'bg-emerald-600 text-white';
    }
    if (badge === 'High Pungency' || badge === 'High Demand') {
      return 'bg-rose-500 text-white';
    }
    return 'bg-brand-700 text-white';
  };

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block mb-2">
            Direct Mill Catalog & Live Quotation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Wholesale Lots & Factory-Direct Commodities
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Electronic weighment guarantee • Zero mandi broker fee • High-grade machine-cleaned crop lots
          </p>
        </div>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
        >
          <span>Open RFQ Cart</span>
          <ArrowRight className="w-4 h-4 text-harvest-400" />
        </button>
      </div>

      {/* Interactive Controls Bar: Category Pills, Search & Sort */}
      <div className="space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-brand-700 text-white shadow-md shadow-brand-700/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-brand-300 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-brand-900 text-harvest-300'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rice, toor dal, sunflower oil, spices, cashews..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-slate-500 font-semibold">
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> commodities
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold focus:outline-none"
              >
                <option value="savings">Highest Savings %</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Grid with Rich Imagery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const qty = quantities[product.id] || 5;
          const savings = product.marketPrice - product.deltaPrice;
          const savingsPct = Math.round((savings / product.marketPrice) * 100);
          const isAdded = addedIds[product.id];

          return (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-brand-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Container with Overlay Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {product.badge && (
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase shadow-md ${getBadgeStyle(product.badge)}`}>
                        {product.badge}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-white border border-slate-700">
                      {product.unitWeight}
                    </span>
                  </div>

                  {/* Savings Pill */}
                  <div className="absolute top-3 right-3 bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-200" />
                    <span>Save {savingsPct}%</span>
                  </div>

                  {/* Bottom Image Overlay Origin */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-harvest-300 truncate">{product.origin}</span>
                    <span className="text-[11px] bg-black/40 px-2 py-0.5 rounded-md border border-white/20">
                      {product.grade}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span className="truncate">Ideal for: {product.popularFor}</span>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Delta Mill Rate</div>
                      <div className="text-2xl font-extrabold text-brand-900 font-mono">
                        ₹{product.deltaPrice.toLocaleString('en-IN')}
                        <span className="text-xs text-slate-500 font-sans font-normal ml-1">/ unit</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Mandi Rate</div>
                      <div className="text-xs line-through text-slate-400 font-mono">
                        ₹{product.marketPrice.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs font-bold text-emerald-600">
                        -₹{savings.toLocaleString('en-IN')} saved
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Stepper & Add to RFQ Button */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2 pt-3">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                    <span className="text-[11px] font-bold text-slate-500 px-2">Lots:</span>
                    <input
                      type="number"
                      min="1"
                      max="200"
                      value={qty}
                      onChange={(e) => handleQtyChange(product.id, e.target.value)}
                      className="w-12 text-center text-xs font-bold bg-white border border-slate-200 rounded-lg py-1 focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-cyan-600 text-white'
                        : 'bg-brand-700 hover:bg-brand-800 text-white shadow-md hover:shadow-brand-700/20'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to RFQ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <p className="text-sm font-semibold text-slate-700">No commodities found matching "{searchQuery}"</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs font-bold text-brand-700 hover:underline"
          >
            Reset Filters & View All
          </button>
        </div>
      )}
    </section>
  );
}
