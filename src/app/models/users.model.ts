class UsersModel {

    id: number = 0

    fullname: string;

    email: string;

    points: number = 0;

    receivePromotionalEmails: boolean;

    password: string;

    createdAt: string;

    phone: string;

    images: UsersImageModel;

}



class UsersImageModel {

    avatarSmPath: string;

    avatarMdPath: string;

    avatarLgPath: string;

}



export { UsersModel, UsersImageModel }