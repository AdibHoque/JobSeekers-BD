export default function Testimonial({data}) {
  const {name, job_title, company, testimonial, avatar} = data;

  return (
    <div className="flex flex-col items-center md:flex-row gap-4">
      <div className="avatar">
        <div className="w-56 rounded-xl">
          <img src={avatar} />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-y-2 text-center md:text-start">
        <div className="rating rating-lg rating-half animate-pulse animate-ease-in-out">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-1"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-primary mask mask-star-2 mask-half-2"
          />
        </div>
        <p className="italic font-bold text-sm">&rdquo;{testimonial}&rdquo;</p>
        <div>
          <h4 className="font-bold text-primary text-xl animate-pulse animate-ease-in-out">
            {name}
          </h4>
          <p className="font-medium text-wrap text-xs">
            {job_title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
