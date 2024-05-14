package websocket

import (
	"fmt"
	"sync"

	"github.com/gorilla/websocket"
)


type Client struct{
	ID string
	Conn *websocket.Conn
	Pool *Pool
	mu sync.Mutex
}
type Message struct {
	Type int    `json:"type"`
	Body string `json:"body"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c // c is client
		c.Conn.Close()
	}()

	for {
		msgType, msg, err := c.Conn.ReadMessage() // from forilla websocket to read message
		if err != nil {
			fmt.Println(err)
			return
		}
		m := Message{Type: msgType, Body: string(msg)}

		c.Pool.Broadcast <- m // writing on to channel

		fmt.Println("msg recieved===>>>\n", m)
	}
}