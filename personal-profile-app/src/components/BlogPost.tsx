import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const BlogPost: React.FC<{ postPath: string }> = ({ postPath }) => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        fetch(postPath)
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error('Error fetching the blog post:', error));
    }, [postPath]);

    return (
        <div className="blog-post">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost;