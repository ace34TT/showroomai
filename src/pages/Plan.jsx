import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Plan = () => {
  const [plan, setPlan] = useState(0);
  return (
    <div className="w-full mt-32 h-fit pb-9 prose max-w-none pt-9 bg-primary-950">
      <h1 className="text-center text-neutral-800">
        Purchase to Join Member Exclusive
      </h1>
      <div className="flex justify-center py-4 w-full px-5">
        <div className="bg-secondary-900 flex justify-around gap-10 p-2 rounded-xl w-full">
          <button
            className={`${
              plan === 0 && "bg-neutral-100"
            }  w-1/2 md:w-[300px] py-2 px-4 text-neutral-800  rounded-lg font-bold`}
            onClick={() => setPlan(0)}
          >
            Monthly
          </button>
          <button
            className={`${
              plan === 1 && "bg-neutral-100"
            }  w-1/2 md:w-[300px] py-2 px-4 text-neutral-800 rounded-lg font-bold`}
            onClick={() => setPlan(1)}
          >
            Yearly <span className="text-orange-400 font-bold">-26% off</span>
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-10">
        <div className="p-5 md:p-10 bg-blue-50 text-neutral-800 rounded-2xl hover:border-2 border-neutral-500">
          <p className="font-bold text-4xl p-0 m-0 text-accent-500 ">Free</p>
          <p className="font-extrabold text-5xl p-0 m-0 my-5 text-neutral-700">
            Free
          </p>
          <button className="text-center w-full py-2 border-2 border-neutral-700 text-neutral-800 rounded-3xl">
            Get started
          </button>
          <p className="text-xs text-secondary-300">Generations</p>
          <ul className="list-none m-0 p-0">
            <li>
              <span className="font-bold">200</span> Relaxed generations per
              month
            </li>
            <li>
              <span className="font-bold">No Fast</span> generation access
            </li>
            <li className="">
              <span className="border py-[2px] px-3 rounded-xl border-neutral-600 text-accent-600 font-bold">
                No Fast
              </span>{" "}
              generation access
            </li>
          </ul>
          <p className="text-xs text-secondary-300">Features</p>
          <ul className="list-none m-0 p-0">
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>{" "}
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Preview results can be downloade
            </li>
          </ul>
        </div>
        <div className="p-5 md:p-10 bg-blue-50 text-neutral-800 rounded-2xl hover:border-2 border-neutral-500">
          <p className="font-bold text-4xl p-0 m-0 text-accent-500 ">Basic</p>
          <p className="font-extrabold p-0 m-0 my-5 text-neutral-600">
            <span>$</span> <span className="text-5xl">19</span>{" "}
            <span>
              /month{" "}
              <span className="line-through text-secondary-500 font-medium">
                $29
              </span>
            </span>
          </p>
          <button className="text-center w-full py-2 font-bold rounded-3xl bg-accent-500">
            Subscribe
          </button>
          <p className="text-xs text-secondary-300">Generations</p>
          <ul className="list-none m-0 p-0">
            <li>
              <span className="font-bold">200</span> Relaxed generations per
              month
            </li>
            <li>
              <span className="font-bold">No Fast</span> generation access
            </li>
            <li className="">
              <span className="border py-[2px] px-3 rounded-xl border-neutral-600 text-accent-600 font-bold">
                No Fast
              </span>{" "}
              generation access
            </li>
          </ul>
          <p className="text-xs text-secondary-300">Features</p>
          <ul className="list-none m-0 p-0">
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>{" "}
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Preview results can be downloade
            </li>
          </ul>
        </div>
        <div className="p-5 md:p-10 bg-blue-50 text-neutral-800 rounded-2xl hover:border-2 border-neutral-500">
          <p className="font-bold text-4xl p-0 m-0 text-accent-500">Free</p>
          <p className="font-extrabold p-0 m-0 my-5 text-neutral-600">
            <span>$</span> <span className="text-5xl">39</span>{" "}
            <span>
              /month{" "}
              <span className="line-through text-secondary-500 font-medium">
                $59
              </span>
            </span>
          </p>
          <button className="text-center w-full py-2 bg-green-400 rounded-3xl font-bold">
            Subscribe
          </button>
          <p className="text-xs text-secondary-300">Generations</p>
          <ul className="list-none m-0 p-0">
            <li>
              <span className="font-bold">200</span> Relaxed generations per
              month
            </li>
            <li>
              <span className="font-bold">No Fast</span> generation access
            </li>
            <li className="">
              <span className="border py-[2px] px-3 rounded-xl border-neutral-600 text-accent-600 font-bold">
                No Fast
              </span>{" "}
              generation access
            </li>
          </ul>
          <p className="text-xs text-secondary-300">Features</p>
          <ul className="list-none m-0 p-0">
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>{" "}
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Preview results can be downloade
            </li>
          </ul>
        </div>
        <div className="p-5 md:p-10 bg-blue-50 text-neutral-800 rounded-2xl hover:border-2 border-neutral-500">
          <p className="font-bold text-4xl p-0 m-0 text-accent-500 ">Free</p>
          <p className="font-extrabold p-0 m-0 my-5 text-neutral-600">
            <span>$</span> <span className="text-5xl">79</span>{" "}
            <span>
              /month{" "}
              <span className="line-through text-secondary-500 font-medium">
                $119
              </span>
            </span>
          </p>
          <button className="text-center w-full py-2 bg-orange-400 font-bold rounded-3xl">
            Get started
          </button>
          <p className="text-xs text-secondary-300">Generations</p>
          <ul className="list-none m-0 p-0">
            <li>
              <span className="font-bold">200</span> Relaxed generations per
              month
            </li>
            <li>
              <span className="font-bold">No Fast</span> generation access
            </li>
            <li className="">
              <span className="border py-[2px] px-3 rounded-xl border-neutral-600 text-accent-600 font-bold">
                No Fast
              </span>{" "}
              generation access
            </li>
          </ul>
          <p className="text-xs text-secondary-300">Features</p>
          <ul className="list-none m-0 p-0">
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Relaxed generations per month
            </li>{" "}
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle color="#00d1ff" size={27} />
              Preview results can be downloade
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;
