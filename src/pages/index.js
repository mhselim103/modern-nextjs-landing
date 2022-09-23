import Head from "next/head";
import Image from "next/image";
import CoreFeature from "../sections/CoreFeature";
import Function from "../sections/Function";
import Hero from "../sections/Hero";
import MeetProduct from "../sections/MeetProduct";
import QualityFeature from "../sections/QualityFeature";
import Service from "../sections/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetProduct />
      <Service />
      <QualityFeature />
      <CoreFeature />
      <Function />
    </>
  );
}
