package com.woowacourse.pickgit.post.presentation.dto.response;

import com.woowacourse.pickgit.post.domain.comment.Comment;

public class CommentResponse {

    private Long id;
    private String authorName;
    private String content;
    private Boolean isLiked;

    private CommentResponse() {
    }

    public CommentResponse(Long id, String authorName, String content, Boolean isLiked) {
        this.id = id;
        this.authorName = authorName;
        this.content = content;
        this.isLiked = isLiked;
    }

    public static CommentResponse from(Comment comment) {
        return new CommentResponse(comment.getId(), comment.getAuthorName(),
            comment.getContent(), false);
    }
}
