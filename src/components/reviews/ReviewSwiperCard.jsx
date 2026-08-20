
export const  ReviewSwiperCard=({ review })=> {
  return (
    <article className="gradient-border h-full w-full overflow-hidden rounded-2xl bg-[#141414] transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex h-full flex-col md:flex-row">
        <div className="relative aspect-[16/10] min-h-[160px] w-full shrink-0 overflow-hidden p-1 md:aspect-auto md:min-h-full md:w-[45%]">
          <img
            src={review.image}
            alt={review.imageAlt}
            draggable={false}
            loading="lazy"
            className="h-full w-full rounded-l-2xl object-cover select-none"
          />

          <div className="absolute left-4 top-4 z-10 flex select-none items-center gap-1.5 rounded-full border border-white/10 bg-black/80 px-2.5 py-1 backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
              <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
              <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
              <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
              <circle cx={12} cy={12} r={2} />
            </svg>

            <span className="text-[9px] font-semibold uppercase tracking-wider text-white md:text-[10px]">
              {review.badge}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col justify-between p-5 md:w-[55%] md:p-6">
          <div>
            <span className="mb-1 block bg-gradient-to-b from-[#AC69FF] to-[#7200FF] bg-clip-text font-helvetica text-[10px] font-bold uppercase text-transparent md:text-xs">
              {review.category}
            </span>

            <h3 className="mb-1.5 line-clamp-2 font-helvetica text-[1.5rem] font-bold text-white">
              {review.title}
            </h3>

            {review.batch && (
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#7200FF]" />

                <span className="text-[17px] font-medium text-neutral-400 md:text-xs">
                  Batch · {review.batch}
                </span>
              </div>
            )}

            <p className="line-clamp-4 font-light leading-relaxed text-neutral-300 md:line-clamp-5">
              {review.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}