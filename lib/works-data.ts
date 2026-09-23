import type { StaticImageData } from "next/image";
import work1 from "@/images/work1.png";
import work2 from "@/images/work2.png";
import work3 from "@/images/work3.png";
import work4 from "@/images/work4.png";
import work5 from "@/images/work5.png";
import work6 from "@/images/work6.png";
import work7 from "@/images/work7.png";
import work8 from "@/images/work8.png";
import work9 from "@/images/work9.png";
import work10 from "@/images/work10.png";
import work11 from "@/images/work11.png";
import work12 from "@/images/work12.png";
import work13 from "@/images/work13.png";
import work14 from "@/images/work14.png";
import work15 from "@/images/work15.png";
import work16 from "@/images/work16.png";

export type Work = {
  id: number;
  image: StaticImageData;
};

const works: Work[] = [
  { id: 1, image: work1 },
  { id: 2, image: work2 },
  { id: 3, image: work3 },
  { id: 4, image: work4 },
  { id: 5, image: work5 },
  { id: 6, image: work6 },
  { id: 7, image: work7 },
  { id: 8, image: work8 },
  { id: 9, image: work9 },
  { id: 10, image: work10 },
  { id: 11, image: work11 },
  { id: 12, image: work12 },
  { id: 13, image: work13 },
  { id: 14, image: work14 },
  { id: 15, image: work15 },
  { id: 16, image: work16 },
];

export default works;