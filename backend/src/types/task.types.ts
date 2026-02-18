export interface Tasks {
    title: string;
    status: "todo" | "in-progress" | "done";
    priority: "low" | "mid" | "high";
    createdAt: Date;
    updatedAt: Date;

}