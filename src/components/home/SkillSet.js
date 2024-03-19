"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";
import frontEnd from "../../../public/front-end.png";
import backEnd from "../../../public/back-end.png";
import jwt from "../../../public/jwt.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaTools,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

const SkillSet = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-center items-center pb-10 relative">
      {/* first card  */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-96"
      >
        <Card className="max-w-[400px] bg-gray-800 h-80">
          <CardHeader className="flex gap-3 justify-center">
            <Image alt="logo fe" src={frontEnd} width={40}></Image>
            <p className="text-xl text-gray-300">Front End Development</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex flex-wrap gap-3 justify-center items-center mt-5">
              <SiNextdotjs className="text-6xl text-sky-600" />
              <FaReact className="text-6xl text-sky-600" />
              <FaHtml5 className="text-6xl text-orange-600" />
              <FaCss3Alt className="text-6xl text-sky-600" />
              <SiTailwindcss className="text-6xl text-sky-600" />
              <RiJavascriptFill className="text-6xl text-yellow-600" />
            </div>
          </CardBody>
          <Divider />
        </Card>
      </motion.div>
      {/* second card  */}
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="w-96"
      >
        <Card className="max-w-[400px] bg-gray-800 h-80">
          <CardHeader className="flex gap-3 justify-center">
            <Image alt="logo fe" src={backEnd} width={40}></Image>
            <p className="text-xl text-gray-300">Back End Development</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex flex-wrap gap-3 justify-center items-center mt-5">
              <FaNodeJs className="text-6xl text-lime-500" />
              <SiExpress className="text-6xl text-gray-600" />{" "}
              <RiJavascriptFill className="text-6xl text-yellow-600" />
              <Image width="52" src={jwt} alt="jason-web-token" />
            </div>
          </CardBody>
          <Divider />
        </Card>
      </motion.div>
      {/* third card  */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-96"
      >
        <Card className="max-w-[400px] bg-gray-800 h-80">
          <CardHeader className="flex gap-3 justify-center">
            <FaTools className="text-4xl text-white" />
            <p className="text-xl text-gray-300">Tools</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex flex-wrap gap-3 justify-center items-center mt-5">
              <SiMongodb className="text-6xl text-green-500" />{" "}
              <SiFirebase className="text-6xl text-yellow-500" />{" "}
              <SiVercel className="text-6xl text-gray-600" />
              <FaGithub className="text-6xl text-slate-600" />
            </div>
          </CardBody>
          <Divider />
        </Card>
      </motion.div>
    </div>
  );
};

export default SkillSet;
