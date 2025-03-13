enum Department {
    ANDROID = "android",
    IOS = "ios",
    DESIGN = "design",
    MANAGEMENT = "management",
    QA = "qa",
    BACK_OFFICE = "back_office",
    FRONTEND = "frontend",
    HR = "hr",
    PR = "pr",
    BACKEND = "backend",
    SUPPORT = "support",
    ANALYTICS = "analytics",
  }

export type Person = {
        id: string,
        avatarUrl: string,
        firstName: string,
        lastName: string,
        userTag: string,
        department:Department,
        position: string,
        birthday: string,
        phone: string

}
