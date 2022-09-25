import Head from "next/head";
import Image from "next/image";
import ClientSatisfaction from "../sections/ClientSatisfaction";
import CoreFeature from "../sections/CoreFeature";
import Function from "../sections/Function";
import Hero from "../sections/Hero";
import MeetProduct from "../sections/MeetProduct";
import Pricing from "../sections/Pricing";
import QualityFeature from "../sections/QualityFeature";
import Service from "../sections/Service";
import Subscribe from "../sections/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetProduct />
      <Service />
      <QualityFeature />
      <CoreFeature />
      <Function />
      <Pricing />
      <ClientSatisfaction />
      <Subscribe />
    </>
  );
}
