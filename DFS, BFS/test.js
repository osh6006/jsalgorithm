const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);
const distance = Array.from({ length: n + 1 }, () => 1);

// 단방향
for (const [src, dest] of vertex) {
  graph[src].push(dest);
}
// 양방향
for (const [src, dest] of vertex) {
  graph[src].push(dest);
  graph[dest].push(src);
}

function dfs(graph, start, visited) {
  const stack = [];
  stack.push(start);
  visited[start] = true;

  while (stack.length) {
    const v = stack.pop();
    console.log(v);
    if (!visited(v)) {
      visited[v] = true;
    }
    for (const node of graph[v]) {
      if (!visited[node]) {
        visited[node] = true;
        stack.push(node);
      }
    }
  }
}

function bfs(graph, start, visited) {
  const queue = [];
  queue.push(start);
  if (!visited[start]) {
    visited[start] = true;
  }

  while (queue.length) {
    const v = queue.shift();
    console.log(v);
    if (!visited[v]) {
      visited[v] = true;
    }

    for (const node of graph[v]) {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
      }
    }
  }
}
