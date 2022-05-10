import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { removeOverflowHidden, addOverflowHidden } from "../../lib/homeOverflowStyles"
import { useEffect } from "react"

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const fullPath = fs.readFileSync(path.join('posts',
        slug + '.mdx'), 'utf-8')

    const { content, data } = matter(fullPath)

    const mdxSource = await serialize(content, {
        parseFrontmatter: true,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        }
    }
}



const PostPage = ({ source, frontMatter }) => {
    useEffect(() => {
        removeOverflowHidden()
    
        return addOverflowHidden
      }, [])
    return (
        <div className="pt-20 pb-20 bg-white">
        <div className="prose mx-10 max-w-4xl lg:mx-auto ">
            <MDXRemote {...source} components={{ SyntaxHighlighter }} />
        </div>
        </div>
    )
}

export default PostPage