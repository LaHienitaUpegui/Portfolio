import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Project } from "../content/projects";

export type CarouselProps = {
    project: Project;
};

function Carousel({ project }: CarouselProps) {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
            {project.projectImages.map((image) => (
                <SwiperSlide>
                    <img
                        src={image}
                        alt={project.title}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            borderRadius: "var(--radius-16px)",
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;
