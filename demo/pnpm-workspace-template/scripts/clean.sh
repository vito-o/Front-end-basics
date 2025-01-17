#!/bin/bash

# 设置颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    echo -e "${GREEN}[Clean] $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}[Warning] $1${NC}"
}

print_error() {
    echo -e "${RED}[Error] $1${NC}"
}

# 确认函数
confirm() {
    read -p "$(echo -e ${YELLOW}"This will remove all node_modules directories. Are you sure? [y/N] "${NC})" response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

# 主清理函数
clean_node_modules() {
    # 查找所有 node_modules 目录
    print_message "Searching for node_modules directories..."
    
    # 使用 find 命令查找所有 node_modules 目录
    DIRS=$(find . -name "node_modules" -type d)
    
    # 如果没有找到任何目录
    if [ -z "$DIRS" ]; then
        print_warning "No node_modules directories found."
        exit 0
    fi
    
    # 显示将要删除的目录
    echo -e "${YELLOW}Found following node_modules directories:${NC}"
    echo "$DIRS"
    
    # 请求确认
    if ! confirm; then
        print_message "Operation cancelled."
        exit 0
    fi
    
    # 删除每个找到的 node_modules 目录
    for dir in $DIRS; do
        print_message "Removing $dir"
        rm -rf "$dir"
        if [ $? -eq 0 ]; then
            print_message "Successfully removed $dir"
        else
            print_error "Failed to remove $dir"
        fi
    done
    
    print_message "All node_modules directories have been removed!"
}

# 执行清理
clean_node_modules 