const PostAsync = async function <T>(path: string, data?: object | string): Promise<T> {
		try {
				let resp = await fetch("Home/" + path, {
						method: "POST",
						credentials: "include",
						headers: { "Content-Type": "application/json" },
						body: data ? JSON.stringify(data) : null,
				});
				if (resp.ok) {
						return (await resp.json()) as T;
				}
				return null as T;
		} catch (e) {
				console.log(e);
				return null as T;
		}
};

export { PostAsync }
