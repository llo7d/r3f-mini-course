import CustomImage from "@/components/CustomImage";
import { Heading } from "@/components/MarkdownElement/Heading";
import { Para } from "@/components/MarkdownElement/Para";
import ReactMarkdown from "react-markdown";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import codeblocks from "remark-code-blocks"
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { Table } from "../MarkdownElement/Table";
import { twMerge } from "tailwind-merge";
export interface ReReactMarkdownProps {
  content: string;
}
const ReReactMarkdown = (props: ReReactMarkdownProps) => {
  return (
    <ReactMarkdown
      children={props?.content}
      remarkPlugins={[remarkParse, remarkRehype, rehypeStringify, remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        p: Para.P,
        span: Para.Span,
        ul: Para.Ul,
        li: Para.Li,
        image: ({ src, alt, ...props }: any) => {
          return <CustomImage src={src} alt={alt} {...props} />;
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={atomDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <span className={twMerge(className, 'bg-neutral-600', 'text-white', 'rounded-md px-1 py-[2px]')} {...props}>
              {children}
            </span>
          );
        },
        h1: Heading.H1,
        h2: Heading.H2,
        h3: Heading.H3,
        h4: Heading.H4,
        h5: Heading.H5,
        h6: Heading.H6,
        table: Table.Table,
        tbody: Table.Tbody,
        thead: Table.Thead,
        tr: Table.Tr,
        th: Table.Th,
        td: Table.Td,
      }}
    ></ReactMarkdown>
  );
};

export default ReReactMarkdown;
