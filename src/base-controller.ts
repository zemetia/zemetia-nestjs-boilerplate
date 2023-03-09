export class BaseController {
    success() {
        return {
            success: "true"
        }
    }

    successWithData(data: any) {
        return {
            success: "true",
            data: data
        }
    }
}