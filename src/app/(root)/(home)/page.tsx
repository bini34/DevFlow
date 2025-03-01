import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "q1",
    title: "How do I use Express as a custom server in Next.js?",
    tags: [
      {
        _id: "t1",
        name: "javascript",
      },
      {
        _id: "t2",
        name: "nextjs",
      },
    ],
    author: {
      _id: "a1",
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 15,
    views: 120,
    answers: [
      {
        content:
          "You can use the custom server feature in Next.js by creating a custom Express server and integrating it with Next's request handler.",
      },
    ],
    createdAt: new Date("2024-01-15T12:00:00Z"),
  },
  {
    _id: "q2",
    title: "What is the difference between useEffect and useLayoutEffect?",
    tags: [
      {
        _id: "t3",
        name: "react",
      },
      {
        _id: "t4",
        name: "hooks",
      },
    ],
    author: {
      _id: "a2",
      name: "Jane Smith",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    upvotes: 22,
    views: 210,
    answers: [
      {
        content:
          "useEffect runs asynchronously after the render, while useLayoutEffect runs synchronously after the render but before the browser paints.",
      },
    ],
    createdAt: new Date("2024-01-16T14:30:00Z"),
  },
  {
    _id: "q3",
    title: "How to center a div using CSS Flexbox?",
    tags: [
      {
        _id: "t5",
        name: "css",
      },
      {
        _id: "t6",
        name: "flexbox",
      },
    ],
    author: {
      _id: "a3",
      name: "Michael Brown",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    upvotes: 30,
    views: 300,
    answers: [
      {
        content:
          "You can center a div by using display: flex; justify-content: center; align-items: center.",
      },
    ],
    createdAt: new Date("2024-01-17T09:45:00Z"),
  },
];

function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="md:hidden flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. Your query could be the next big thing others learn from.
        Get involved! 💬"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}

export default Home;
