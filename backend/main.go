package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/2625-glitch/golang-chat/websocket"
)
func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("webscojet endpoint reached")
	conn, err:= websocket.Upgrade(w,r)
	if err != nil {
		fmt.Println(err)
		return
	}
	client:= &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client // writing to pool after registering client
	client.Read()

}
func setupRoutes() {
	log.Println("This is working")
	pool:= websocket.NewPool();
	go pool.Start();
	// 1.creating an http server with websocket endpoint
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})

}
func main() {
	var arr [4]int;
	arr[0]=1;
	arr[1]=2;
	arr[2]=3;
	fmt.Println("array is:",arr)
	//  creating a http server
	setupRoutes();
	http.ListenAndServe(":9000",nil);


}