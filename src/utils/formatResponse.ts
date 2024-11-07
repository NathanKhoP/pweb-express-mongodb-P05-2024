export default function formatResponse(
    status: "failed" | "error" | "success",
    message: string,
    data: any = null
  ) {
    return {
      status,
      message,
      data,
    };
  }