function Paragraph() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center justify-center leading-[18px] min-h-px not-italic relative text-[#6b6b6b] text-[14px] w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold min-h-px relative w-full">{`Lorem ipsum dolor sit amet consectetur. `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">{`Vulputate amet porttitor tristique sit eget. Iaculis elit semper bibendum non rutrum quam. Nulla urna in vel et. Auctor sed turpis etiam magna metus sapien sed amet dictum. Sed at at volutpat purus. Vel mi at morbi in at purus vitae. Suscipit sagittis porttitor cursus ullamcorper blandit tortor odio. Facilisis amet urna facilisi vulputate. Risus risus sit curabitur convallis amet viverra. Tellus euismod iaculis gravida massa orci ipsum. `}</p>
    </div>
  );
}

export default function ContainerFliped() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_5px_11.7px_#f8d79d] flex flex-col items-start p-[33px] relative rounded-[14px] size-full" data-name="Container Fliped">
      <div aria-hidden="true" className="absolute border-[#e8e4dc] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph />
    </div>
  );
}