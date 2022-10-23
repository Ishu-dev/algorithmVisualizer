import React from "react";
import { batch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import * as Algorithms from "../MazeUtils/algorithms";
import { setIsGenerating, setStatus } from "/redux/reducers/mazeSlice";

const StartButton = () => {
  const algoId = useSelector((state) => state.page.algoId);
  const dispatch = useDispatch();

  const startAlgo = async (algoId) => {
    dispatch(setIsGenerating(true));
    await Algorithms.DFSMazeGeneration();
    dispatch(setIsGenerating(false));
  };

  return (
    <div className="w-full h-full max-w-[250px]">
      {useSelector((state) => state.maze.isGenerating) === false ? (
        <div
          className="w-full h-full max-w-[250px] bg-green-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-green text-lg hover:cursor-pointer hover:bg-green hover:text-bg-1 select-none"
          onClick={() => {
            startAlgo(algoId);
          }}
        >
          Generate
        </div>
      ) : (
        <div
          className="w-full h-full max-w-[250px] bg-red-bg flex justify-center items-center text-text-1 font-space uppercase border-l-[10px] border-red text-lg hover:cursor-pointer hover:bg-red hover:text-bg-1 select-none"
          onClick={() => {
            batch(() => {
              dispatch(setIsGenerating(false));
              dispatch(setStatus("maze generation stopped"));
            });
          }}
        >
          Stop
        </div>
      )}
    </div>
  );
};

export default StartButton;