import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledIdeaBoard,
  StyledIdea,
  StyleIdeaHeader,
} from "../styles/IdeaPage.Styles";
import DeleteSvg from "../images/trash-can-solid.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'

export const IdeaPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    userName: "",
  });

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch(`/api/users/${userId}`, { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUser(json.data);
        setIdeas(json.data.ideas);
      })
      .catch((err) => {
        console.log("Error getting user", err);
      });
  }, [userId]);

  const createIdea = () => {
    fetch(`/api/users/${user._id}/ideas`, { method: "post" })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //   console.log(json.data);
        setIdeas(json.data.ideas);
      })
      .catch((err) => {
        console.log("Error creating idea", err);
      });
  };

  const deleteIdea = (id) => {
    fetch(`/api/users/${user._id}/ideas/${id}`, { method: "delete" })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //   console.log(json.data);
        setIdeas(json.data.ideas);
      })
      .catch((err) => {
        console.log("Error creating idea", err);
      });
  };
  console.log(ideas);

  const UpdateIdea = (id, value) => {
    console.log(id, value);
    console.log(ideas);
    const editIdea = ideas.map((idea) => {
      if (idea._id === id) {
        console.log(idea);
        return {
          ...idea,
          ...value,
        };
      } else {
        return idea;
      }
      // console.log(idea);
    });
    console.log(editIdea);
    setIdeas(editIdea);
  };

  const pushUpDate = (id) => {
    const idea = ideas.find((idea) => idea._id === id);

    console.log(id, idea);
    // const  [event]  = event.target.name;
    fetch(`/api/users/${user._id}/ideas/${id}`, {
      method: "PATCH",
      body: JSON.stringify(idea),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //   console.log(json.data);
        setIdeas(json.data.ideas);
      })
      .catch((err) => {
        console.log("Error updating idea", err);
      });
  };

  // console.log(ideas[2]);

  return (
    <div>
      <StyleIdeaHeader>
        <h1>{user.userName}'s Idea Board</h1>
        <button onClick={createIdea}>New Idea</button>
      </StyleIdeaHeader>
      <StyledIdeaBoard backgroundColor="#61dafb">
        {ideas.map((idea) => (
          <StyledIdea
            key={idea._id}
            title={idea.title}
            description={idea.description}
            // backgroundColor="#61dafb"
          >
            <input
              type="text"
              name="title"
              onBlur={() => pushUpDate(idea._id)}
              onChange={(event) =>
                UpdateIdea(idea._id, { title: event.target.value })
              }
              //   onChange={handleTitleChange}
              value={idea.title}
              placeholder="Title of the idea"
            />
            <textarea
              name="description"
              onBlur={() => pushUpDate(idea._id)}
              onChange={(event) =>
                UpdateIdea(idea._id, { description: event.target.value })
              }
              value={idea.description}
              placeholder="Description of the idea"
            />
            <button onClick={() => deleteIdea(idea._id)}>
              <img width={20} height={20} src={DeleteSvg} alt="Delete Icon" />
            </button>
            {/* <FontAwesomeIcon icon="fas fa-trash-alt" /> */}
          </StyledIdea>
        ))}
      </StyledIdeaBoard>
      {/* This next line shows the data object */}
      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(user, null, 1)}</pre> */}
    </div>
  );
};
