import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Plus,
  Check,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  SlidersHorizontal,
  Package,
  Sparkles,
  Pause,
  Play,
  RotateCcw,
  Layers,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from '../data/products';
import { useRfq } from '../context/RfqContext';

export default function CatalogSection({ initialCategory = 'all' }) {
  const { addToCart, setIsDrawerOpen } = useRfq();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedIds, setAddedIds] = useState({});
  const [quantities, setQuantities] = useState({});
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const tickerContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragMovedRef = useRef(false);

  // Triple categories for infinite wrapping
  const tickerItems = useMemo(() => [...CATEGORIES, ...CATEGORIES, ...CATEGORIES], []);

  // Wrap check function for infinite looping
  const checkWrap = () => {
    const el = tickerContainerRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    if (oneSetWidth > 50) {
      if (el.scrollLeft >= oneSetWidth * 2) {
        el.scrollLeft -= oneSetWidth;
      } else if (el.scrollLeft <= 5) {
        el.scrollLeft += oneSetWidth;
      }
    }
  };

  // Center scroll position on mount
  useEffect(() => {
    const el = tickerContainerRef.current;
    if (el) {
      const oneSetWidth = el.scrollWidth / 3;
      el.scrollLeft = oneSetWidth;
    }
  }, []);

  // Continuous auto-glide ticker via requestAnimationFrame
  useEffect(() => {
    let animId;
    const glide = () => {
      const el = tickerContainerRef.current;
      if (el && !isMarqueePaused && !isHovered && !isDraggingRef.current) {
        el.scrollLeft += 0.75;
        const oneSetWidth = el.scrollWidth / 3;
        if (oneSetWidth > 50) {
          if (el.scrollLeft >= oneSetWidth * 2) {
            el.scrollLeft -= oneSetWidth;
          } else if (el.scrollLeft <= 5) {
            el.scrollLeft += oneSetWidth;
          }
        }
      }
      animId = requestAnimationFrame(glide);
    };

    animId = requestAnimationFrame(glide);
    return () => cancelAnimationFrame(animId);
  }, [isMarqueePaused, isHovered]);

  const scrollLeftOrRight = (distance) => {
    const el = tickerContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: distance, behavior: 'smooth' });
    setTimeout(checkWrap, 350);
  };

  const handleMouseDown = (e) => {
    const el = tickerContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
    dragMovedRef.current = false;
  };

  const handleMouseMove = (e) => {
    const el = tickerContainerRef.current;
    if (!isDraggingRef.current || !el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      dragMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftStartRef.current - walk;
    checkWrap();
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e) => {
    const el = tickerContainerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaX) > 0) {
      checkWrap();
    } else if (Math.abs(e.deltaY) > 0) {
      el.scrollLeft += e.deltaY;
      checkWrap();
    }
  };

  const handleCategoryCardClick = (catId) => {
    if (dragMovedRef.current) {
      dragMovedRef.current = false;
      return;
    }
    handleCategorySelect(catId);
  };

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const activeCategoryObj = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.tamilName && item.tamilName.toLowerCase().includes(q)) ||
        (item.tanglishKeywords && item.tanglishKeywords.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        item.lotSize.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (product) => {
    const qty = quantities[product.id] || 1;
    addToCart(product, qty);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const handleQtyChange = (id, val) => {
    const num = Math.max(1, Math.min(500, parseInt(val) || 1));
    setQuantities((prev) => ({ ...prev, [id]: num }));
  };

  const handleDirectWhatsApp = (product) => {
    const text = encodeURIComponent(
      `*Delta Traders Product Enquiry*\n` +
      `Product: ${product.name} (${product.tamilName || ''})\n` +
      `Pack Size: ${product.lotSize}\n` +
      `Please share availability and wholesale quote.`
    );
    window.open(`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="catalog" className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-navy-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-navy-900 px-3.5 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30 inline-block mb-2 whitespace-nowrap">
            Categorized Wholesale & Retail Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
            Groceries, Food Essentials & Packaging Materials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-4xl leading-relaxed">
            Supplying households, retailers, hotels, restaurants, and wedding caterers across Maduranthagam and Chengalpattu District.
          </p>
        </div>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-navy-900 dark:bg-brand-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md border border-cyan-500/30 whitespace-nowrap shrink-0"
        >
          <span>View Enquiry Basket</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      {/* Interactive Category Ticker (Auto-glides, Pauses on Hover, Drag/Arrows to Move Left/Right) */}
      <div className="space-y-3">
        {/* Ticker Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-100 dark:bg-navy-900 text-cyan-800 dark:text-cyan-300 font-extrabold uppercase tracking-wider text-[11px] border border-cyan-300 dark:border-cyan-800">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Category Ticker</span>
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-xs hidden sm:inline">
              Auto-gliding • Hover to pause • Drag, swipe, or click arrows to move left/right
            </span>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {selectedCategory !== 'all' && (
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="Clear category filter and view all products"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Show All (72)</span>
              </button>
            )}

            {/* Left & Right Manual Navigation Buttons in Header */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-navy-950 p-0.5 rounded-lg border border-slate-300 dark:border-navy-800">
              <button
                type="button"
                onClick={() => scrollLeftOrRight(-260)}
                className="p-1 rounded-md bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all shadow-sm"
                title="Move categories left"
                aria-label="Move categories left"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollLeftOrRight(260)}
                className="p-1 rounded-md bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all shadow-sm"
                title="Move categories right"
                aria-label="Move categories right"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMarqueePaused((prev) => !prev)}
              className="px-3 py-1 rounded-lg bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700 hover:border-cyan-400 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              title={isMarqueePaused ? 'Resume auto-scrolling ticker' : 'Pause auto-scrolling ticker'}
            >
              {isMarqueePaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                  <span>Resume Ticker</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-cyan-500" />
                  <span>Pause Ticker</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Interactive Track Container (With Left & Right Quick Step Buttons, Drag to Scrub, Zero Ugly Scrollbars) */}
        <div className="relative w-full group/ticker">
          {/* Floating Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollLeftOrRight(-280)}
            aria-label="Scroll left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 dark:bg-navy-900/95 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-400 dark:hover:text-slate-950 border border-slate-300 dark:border-cyan-500/40 shadow-lg flex items-center justify-center transition-all active:scale-95 hover:scale-105"
            title="Move left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollLeftOrRight(280)}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 dark:bg-navy-900/95 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-400 dark:hover:text-slate-950 border border-slate-300 dark:border-cyan-500/40 shadow-lg flex items-center justify-center transition-all active:scale-95 hover:scale-105"
            title="Move right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Left & Right Gradient Fades to create seamless cinematic edge entry */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-100 dark:from-navy-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-100 dark:from-navy-950 to-transparent z-10" />

          {/* Drag & Scroll Container */}
          <div
            ref={tickerContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUpOrLeave();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onTouchStart={() => {
              isDraggingRef.current = true;
              dragMovedRef.current = false;
            }}
            onTouchEnd={() => {
              isDraggingRef.current = false;
            }}
            onScroll={checkWrap}
            onWheel={handleWheel}
            className="relative w-full overflow-x-auto no-scrollbar py-2.5 px-12 rounded-2xl bg-slate-100/60 dark:bg-navy-950/40 border border-slate-200/80 dark:border-navy-800/80 select-none cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex items-center gap-3 w-max py-0.5">
              {tickerItems.map((cat, idx) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={`${cat.id}-${idx}`}
                    type="button"
                    onClick={() => handleCategoryCardClick(cat.id)}
                    className={`group px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 shadow-sm shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-navy-950 dark:bg-cyan-500 text-cyan-300 dark:text-navy-950 border-2 border-cyan-400 dark:border-cyan-200 shadow-md ring-2 ring-cyan-500/30 scale-[1.03]'
                        : 'bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-700/80 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-[1.02]'
                    }`}
                  >
                    <span className="font-bold">{cat.name}</span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full transition-colors ${
                        isSelected
                          ? 'bg-cyan-400 dark:bg-navy-950 text-navy-950 dark:text-cyan-300 font-black'
                          : 'bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-400 group-hover:bg-cyan-50 dark:group-hover:bg-navy-800 group-hover:text-cyan-600 dark:group-hover:text-cyan-300'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter & Search Bar Row */}
        <div className="space-y-3 pt-1">
          {selectedCategory !== 'all' && (
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-cyan-50 dark:bg-navy-900 border border-cyan-200 dark:border-cyan-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-cyan-800 dark:text-cyan-300 font-extrabold">Active Category Filter:</span>
                <span className="font-bold text-slate-900 dark:text-white bg-white dark:bg-navy-950 px-2.5 py-0.5 rounded-md border border-cyan-300 dark:border-cyan-700">
                  {activeCategoryObj.name} ({activeCategoryObj.count} items)
                </span>
              </div>
              <button
                onClick={() => handleCategorySelect('all')}
                className="text-cyan-700 dark:text-cyan-300 hover:underline font-bold text-xs"
              >
                Clear Filter (View All 72)
              </button>
            </div>
          )}

        {/* Search Bar Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-navy-900 p-3 rounded-2xl border border-slate-200 dark:border-navy-800 shadow-sm">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in English or Tanglish (e.g., toor dal, odacha kalla, gundu melagai, aluminium container)..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto text-xs text-slate-500 dark:text-slate-400 font-semibold gap-3">
            <span>
              Showing <strong className="text-slate-900 dark:text-white">{filteredProducts.length}</strong> items
            </span>
            <span className="text-[11px] text-cyan-600 dark:text-cyan-400">
              Bulk lots & retail packs available
            </span>
          </div>
        </div>
      </div>

      {/* Product Cards Grid - Expansive 5-col on widescreen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => {
          const qty = quantities[product.id] || 1;
          const isAdded = addedIds[product.id];

          return (
            <div
              key={product.id}
              className="group bg-white dark:bg-navy-900 rounded-3xl border border-slate-200 dark:border-navy-800 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Container */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-navy-950">
                  <img
                    src={product.image}
                    alt={`${product.name} - Delta Traders Maduranthagam`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  {/* Pack / Lot Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-navy-950/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-sm">
                      {product.lotSize}
                    </span>
                  </div>

                  {/* Stock Status Badge */}
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>In Stock</span>
                  </div>

                  {/* Bottom Tamil / Tanglish Name Overlay */}
                  {product.tamilName && (
                    <div className="absolute bottom-2.5 left-3 right-3 text-cyan-200 text-xs font-semibold truncate drop-shadow">
                      {product.tamilName}
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="p-4 space-y-2.5">
                  <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>Pack: <strong className="text-slate-800 dark:text-slate-200">{product.lotSize}</strong></span>
                    <button
                      onClick={() => handleDirectWhatsApp(product)}
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"
                      title="Enquire price on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire Rate</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Stepper & Add to RFQ Button */}
              <div className="p-4 pt-0 border-t border-slate-100 dark:border-navy-800 mt-2">
                <div className="flex items-center gap-2 pt-3">
                  <div className="flex items-center border border-slate-200 dark:border-navy-700 rounded-xl bg-slate-50 dark:bg-navy-950 p-1">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 px-1.5">Qty:</span>
                    <input
                      type="number"
                      min="1"
                      max="500"
                      value={qty}
                      onChange={(e) => handleQtyChange(product.id, e.target.value)}
                      className="w-10 text-center text-xs font-extrabold bg-white dark:bg-navy-900 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700 rounded-lg py-1 focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                      isAdded
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-navy-900 hover:bg-navy-800 dark:bg-brand-900 dark:hover:bg-brand-800 text-white border border-cyan-500/30 hover:border-cyan-400 shadow-md'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 text-cyan-400" />
                        <span>Add to Basket</span>
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
        <div className="text-center py-16 bg-white dark:bg-navy-900 rounded-3xl border border-slate-200 dark:border-navy-800 space-y-3">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            No items found matching "{searchQuery}"
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            Reset Filters & View All 72 Items
          </button>
        </div>
      )}

    </section>
  );
}
