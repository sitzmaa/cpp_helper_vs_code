cmake_minimum_required(VERSION 3.14)
project(CPPVSCodePlugin)

set(CMAKE_CXX_STANDARD 17)

set(Clang_DIR "/opt/homebrew/opt/llvm/lib/cmake/clang")  # Adjust if necessary
find_package(Clang REQUIRED)
find_package(Valgrind REQUIRED) # Memory analysis

add_executable(server src/main.cpp src/LSPServer.cpp src/Formatter.cpp src/CommentGen.cpp src/HeaderCheck.cpp src/MemoryCheck.cpp)

target_include_directories(server PRIVATE include)
target_link_libraries(server PRIVATE clang Valgrind)