import React, { useEffect, useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import useTheme from "../../hooks/useTheme";
import { ChatType } from "../../data/chat";
import ChatBubble from "../../components/ChatBubble";
import Select from "../../components/Select";

import { getChatData } from "./service";

function Chatroom() {
  const authState = useAuth();
  const { selectedTheme, themes, themeName, changeTheme } = useTheme();

  const [chatData, setChatData] = useState<ChatType[]>([]);

  const nav = useNavigate();
  const [text, setText] = useState("");
  const handleLogout = () => {
    authState.logout();
    nav("/login");
  };

  const getData = async () => {
    const d = await getChatData();
    setChatData(d);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="chatroom"
      style={{
        background: selectedTheme?.background,
        color: selectedTheme?.textColor,
      }}
    >
      <div className="header">
        <h2>Wysa</h2>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Switch Component</p>
          <Select
            onChange={(s) => changeTheme(s)}
            data={Object.keys(themes)}
            selected={themeName}
          />
          <Button onClick={() => handleLogout()} title="Logout" />
        </div>
      </div>

      <div className="chat_text">
        {chatData.map((c, i) => {
          let isEnd = false;
          if (
            i == chatData.length - 1 ||
            chatData[i + 1].type != chatData[i].type
          ) {
            isEnd = true;
          }

          if (c.type == "incoming") {
            return (
              <div
                key={i}
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  margin: 8,
                }}
              >
                <ChatBubble variant={isEnd ? "secondry" : "primary"}>
                  {c.text}
                </ChatBubble>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                style={{
                  display: "inline-block",
                  alignSelf: "flex-end",
                  margin: 8,
                }}
              >
                <ChatBubble
                  variant={isEnd ? "secondry" : "primary"}
                  position={"right"}
                >
                  {c.text}
                </ChatBubble>
              </div>
            );
          }
        })}
      </div>
      <div className="chat_input">
        <TextInput onChange={setText} placeholder="text" value={text} />
        <Button
          onClick={() => {
            setChatData((s) => s.concat([{ type: "outgoing", text }]));
            setText("");
          }}
          title="Send"
        />
      </div>
    </div>
  );
}

export default Chatroom;
