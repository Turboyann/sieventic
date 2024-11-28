'use client'
import React, { useState } from 'react';

interface Comment {
    name: string;
    message: string;
    date: string;
    likes: number;
    dislikes: number;
    userReaction: 'like' | 'dislike' | null;
}

interface CommentSectionProps {
    postId: string;
}

export default function Commentsection({ postId }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [userComment, setUserComment] = useState('');
    const [userName, setUserName] = useState('Anonymous');
    const [publishEnabled, setPublishEnabled] = useState(false);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserComment(value);
        setPublishEnabled(!!value);
    };

    const addPost = () => {
        if (!userComment) return;

        const newComment = {
            name: userName || 'Anonymous',
            message: userComment,
            date: new Date().toLocaleString(),
            likes: 0,
            dislikes: 0,
            userReaction: null,
        };

        setComments([...comments, newComment]);
        setUserComment('');
        setPublishEnabled(false);
    };

    const handleLike = (index: number) => {
        const updatedComments = [...comments];
        const comment = updatedComments[index];

        if (!comment) return;

        if (comment.userReaction === 'like') {
            comment.likes -= 1;
            comment.userReaction = null;
        } else {
            if (comment.userReaction === 'dislike') {
                comment.dislikes -= 1;
            }
            comment.likes += 1;
            comment.userReaction = 'like';
        }

        setComments(updatedComments);
    };

    const handleDislike = (index: number) => {
        const updatedComments = [...comments];
        const comment = updatedComments[index];

        if (!comment) return;

        if (comment.userReaction === 'dislike') {
            comment.dislikes -= 1;
            comment.userReaction = null;
        } else {
            if (comment.userReaction === 'like') {
                comment.likes -= 1;
            }
            comment.dislikes += 1;
            comment.userReaction = 'dislike';
        }

        setComments(updatedComments);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Post a Comment</h1>
            </div>
            <div className="mb-4 text-gray-600">
                <span>{comments.length}</span> Comments
            </div>
            <div className="space-y-4">
                {comments.map((comment, index) => (
                    <div key={index} className="flex justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div>
                            <h1 className="text-lg font-semibold text-blue-600">{comment.name}</h1>
                            <p className="text-gray-700">{comment.message}</p>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <div className="items-center flex space-x-2">
                            <p>{comment.likes - comment.dislikes}</p>
                            <button
                                onClick={() => handleLike(index)}
                                className={`text-blue-500 hover:underline ${comment.userReaction === 'like' ? 'font-bold' : ''}`}
                            >
                                👍
                            </button>
                            <button
                                onClick={() => handleDislike(index)}
                                className={`text-red-500 hover:underline ${comment.userReaction === 'dislike' ? 'font-bold' : ''}`}
                            >
                                👎
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                />
                <input
                    type="text"
                    placeholder="Enter comment"
                    value={userComment}
                    onChange={handleCommentChange}
                    className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={!publishEnabled}
                    onClick={addPost}
                    className={`w-full p-3 text-white rounded-lg ${publishEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed'}`}
                >
                    Publish
                </button>
            </div>
        </div>
    );
}
