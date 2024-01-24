#include <stdio.h>
#include <stdlib.h>
#include <winsock2.h>

#pragma comment(lib, "ws2_32.lib")

int main() {
    // Initialize Winsock
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        fprintf(stderr, "Failed to initialize Winsock\n");
        return EXIT_FAILURE;
    }

    // Create a TCP socket
    SOCKET sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd == INVALID_SOCKET) {
        perror("Error creating socket");
        WSACleanup();
        return EXIT_FAILURE;
    }

    // Specify the server address and port
    struct sockaddr_in server_address;
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons(60350); // Replace with your server's port
    server_address.sin_addr.s_addr = inet_addr("http://localhost:60350/adm/receive_signin"); // Replace with your server's IP address

    // Connect to the server
    if (connect(sockfd, (struct sockaddr*)&server_address, sizeof(server_address)) == SOCKET_ERROR) {
        perror("Error connecting to the server");
        closesocket(sockfd);
        WSACleanup();
        return EXIT_FAILURE;
    }

    // Now you have a connected socket (sockfd) that you can use for communication

    // Example: Send "Hello" to the server
    const char* message = "Hello";
    send(sockfd, message, strlen(message), 0);

    // Keep the socket open until you decide to close it
    while (1) {
        // Add your code here to perform additional operations with the socket

        // Example: Receive data from the server (you can add more code here)
    }

    // Close the socket and clean up Winsock when done
    closesocket(sockfd);
    WSACleanup();

    return 0;
}
