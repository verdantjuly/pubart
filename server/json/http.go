package json

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func WriteWith(data interface{}, w http.ResponseWriter) {
	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("JSON encoding failed:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonData)
}
