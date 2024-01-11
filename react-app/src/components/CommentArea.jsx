import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Error from "./Error";
import Loading from "./Loading";
import { Component } from "react";
//import { useState } from "react";
//import { useEffect } from "react";

//  const CommentArea = (props) => {
//    const [loading, setLoading] = useState(false);
//    const [error, setError] = useState(false);
//    const [comments, setComments] = useState([]);
//
//    const fetchComments = async () => {
//      setLoading(true);
//      try {
//        const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.bookId, {
//          headers: {
//            Authorization:
//              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDQ3MTk0NjMsImV4cCI6MTcwNTkyOTA2M30.oMBXsd2e5xf8MtNXwcZiUmrBOrsAm8adped1kKCNq9w",
//          },
//        });
//        if (resp.ok) {
//          const bookComments = await resp.json();
//          console.log("fetched", bookComments);
//          setComments(bookComments);
//        }
//      } catch (err) {
//        setError(true);
//        console.log(err);
//      } finally {
//        setLoading(false);
//      }
//    };
//
//    useEffect(() => {
//      fetchComments();
//      // eslint-disable-next-line
//    }, [comments]);
//
//    return (
//      <div className="border border-1 border-opacity-75 rounded-2 p-3 mb-3">
//        {loading ? <Loading></Loading> : ""}
//        <CommentList comments={comments}></CommentList>
//        {error ? <Error text="Errore nel caricamento dei dati"></Error> : ""}
//        <AddComment bookId={props.bookId}></AddComment>
//      </div>
//    );
//  };

class CommentArea extends Component {
  state = {
    loading: false,
    error: false,
    comments: [],
  };

  fetchComments = async () => {
    this.setState({ loading: true });
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDQ3MTk0NjMsImV4cCI6MTcwNTkyOTA2M30.oMBXsd2e5xf8MtNXwcZiUmrBOrsAm8adped1kKCNq9w",
        },
      });
      if (resp.ok) {
        const bookComments = await resp.json();
        console.log("fetched", bookComments);
        this.setState({ comments: bookComments, loading: false });
      }
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    if (this.props.bookId) {
      this.fetchComments();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }
  }

  render() {
    if (this.props.bookId) {
      return (
        <div className="border border-1 border-opacity-75 rounded-2 p-3 mb-3">
          {this.state.loading ? <Loading></Loading> : ""}
          <CommentList comments={this.state.comments}></CommentList>
          {this.state.error ? <Error text="Errore nel caricamento dei dati"></Error> : ""}
          <AddComment bookId={this.props.bookId}></AddComment>
        </div>
      );
    } else {
      return <div data-testid="CommentArea"></div>;
    }
  }
}

export default CommentArea;
