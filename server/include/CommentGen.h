#ifndef COMMENTGEN_H
#define COMMENTGEN_H
#include <string>
class CommentGen {
public:
    std::string generateFunctionComment(const std::string& functionCode);
};
#endif