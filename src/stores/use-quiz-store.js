import { s } from "vite/dist/node/types.d-aGj9QkWt";
import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    porcentageQuizCompleted: 0,
  },

  setQuiz: (quizUpdate) =>
    set((state) => ({
      quiz: {...state.quiz, ...quizUpdate},
    })),
    
  clearQuiz: () =>
    set({
      quiz: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        porcentageQuizCompleted: 0,
      },
    }),




}));

export default useQuizStore;