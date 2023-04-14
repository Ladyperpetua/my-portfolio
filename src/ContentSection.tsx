import { CloudArrowUpIcon, ServerIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function ContentSection() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Work faster
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Better Design
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Using front end development tools like Tailwind CSS and React, I
              am able to build better applications and systems faster while also
              creating a more consistent user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt=""
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>
              I have experience with HTML, CSS, JavaScript, React, Node.js, and
              Git. I have also been learning TypeScript and Tailwind CSS while
              contributing to Alby. The contributors and mentor in the community
              are very supportive and quick to respond. I consider myself a
              quick learner, a team player, and an assertive thinker.
              Contributing to this project has been a great learning experience
              for me, it has helped me hone and broaden my skills, and I look
              forward to making more meaningful contributions to this wonderful
              project.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CodeBracketIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    HTML, CSS, and JavaScript.
                  </strong>{" "}
                  Learning HTML, CSS, and JavaScript is an essential skill for
                  in web development. HTML provides the foundation for web
                  pages, allowing you to structure content and add links,
                  images, and videos. CSS, on the other hand, allows you to
                  control the visual appearance of web pages, including fonts,
                  colors, and layout. With JavaScript, you can create
                  interactive websites that respond to user input, such as forms
                  and buttons, as well as create dynamic effects like animations
                  and transitions. Together, these three languages form the
                  backbone of modern web development and are essential for
                  building beautiful and engaging websites.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CodeBracketIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    React TypeScript
                  </strong>{" "}
                  Learning React with TypeScript is a popular choice for many
                  web developers, as it combines the power of React with the
                  type safety and scalability of TypeScript. React is a popular
                  JavaScript library for building user interfaces, while
                  TypeScript is a typed superset of JavaScript that provides
                  additional safety features and tooling for large-scale
                  applications. By combining these two technologies, developers
                  can build complex and scalable web applications with ease.
                  TypeScript provides a strong type system that catches errors
                  early in development, while React allows for modular and
                  reusable components that make it easy to build complex UIs.
                  Together, React with TypeScript is a powerful combination for
                  building modern web applications that are both maintainable
                  and scalable.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CodeBracketIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Source Control
                  </strong>{" "}
                  Learning Source Control is an essential skill for anyone
                  involved in software development. Source control, also known
                  as version control or revision control, is the practice of
                  tracking and managing changes to software code over time. It
                  allows developers to collaborate on projects, keep track of
                  changes, and revert to previous versions if necessary.
                  Learning source control tools like Git can save time and
                  reduce the risk of errors when working on projects with
                  multiple developers or when making changes over time. With
                  source control, developers can easily track changes,
                  collaborate on projects, and maintain a clear history of code
                  changes, making it an essential tool for anyone involved in
                  software development.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
