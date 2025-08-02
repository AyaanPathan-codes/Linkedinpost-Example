// LinkedInPost.jsx
import { useState } from "react";
import { FaThumbsUp, FaRegCommentDots, FaShare } from "react-icons/fa";

export default function LinkedInPost() {
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const postText =
    "Hey tech+social change friends, I'm looking for a values-aligned dev firm that could build prototypes quickly and collaborate tightly for a cool and important set of iterative experiments at the intersection of AI + grassroots organizing. We’re testing what’s possible when human values and social movements shape the future of AI development.";

  const toggleShowMore = () => setShowMore(!showMore);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment.trim()]);
      setComment("");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-4">
      {/* Top: User Info */}
      <div className="flex items-start gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="rounded-full w-10 h-10"
        />
        <div>
          <h2 className="font-semibold text-sm">
            Peter Koechley <span className="inline-block align-middle ml-1">🔗</span>
          </h2>
          <p className="text-xs text-gray-500">
            Creative strategy + applied AI + movement building
          </p>
          <p className="text-xs text-gray-400 mt-1">1w • 🔒</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-sm mt-3 text-gray-800">
        {showMore ? postText : postText.slice(0, 160) + "..."}
        <button onClick={toggleShowMore} className="text-blue-600 ml-1 text-xs">
          {showMore ? "Show less" : "Show more"}
        </button>
      </p>

      {/* Reactions */}
      <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>🌐 🧠 🔧</span>
          <span>45</span>
        </div>
        <div>42 comments • 10 reposts</div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around text-sm text-gray-600 border-t border-gray-200 mt-3 pt-2">
        <button className="flex items-center gap-2 hover:text-blue-600">
          <FaThumbsUp /> Like
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600">
          <FaRegCommentDots /> Comment
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600">
          <FaShare /> Repost
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600">
          Send
        </button>
      </div>

      {/* Add a Comment */}
      <form
        onSubmit={handleAddComment}
        className="flex items-center mt-3 gap-2"
      >
        <img
          src="https://i.pravatar.cc/32?img=2"
          alt="You"
          className="rounded-full w-8 h-8"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full bg-gray-100 rounded-full px-4 py-1 text-sm outline-none"
        />
      </form>

      {/* Comment Example */}
      <div className="mt-4 ml-10">
        <p className="text-xs text-gray-500 mb-2">Most relevant</p>

        {/* Default comment */}
        <div className="flex gap-3 mb-3">
          <img
            src="https://i.pravatar.cc/32?img=3"
            alt="Commenter"
            className="rounded-full w-8 h-8"
          />
          <div>
            <p className="text-sm font-semibold">Thinkwider Co., Ltd.</p>
            <p className="text-xs text-gray-500">4,605 followers • 5d</p>
            <p className="text-sm mt-1">
              Hi <span className="text-blue-600">Peter Koechley</span><br />
              Have a good day!
            </p>
          </div>
        </div>

        {/* User comments */}
        {comments.map((cmt, index) => (
          <div className="flex gap-3 mb-3" key={index}>
            <img
              src={`https://i.pravatar.cc/32?img=${index + 10}`}
              alt="You"
              className="rounded-full w-8 h-8"
            />
            <div>
              <p className="text-sm font-semibold">You</p>
              <p className="text-sm mt-1">{cmt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
