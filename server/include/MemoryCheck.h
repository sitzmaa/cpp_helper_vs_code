#ifndef MEMORYCHECK_H
#define MEMORYCHECK_H
#include <string>
class MemoryCheck {
public:
    bool detectMemoryLeaks(const std::string& executablePath);
};
#endif