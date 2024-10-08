import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";


// get a user
export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params
    // @ts-ignore
    const user = await prisma.User.findUnique(
        {
            where: {id: +id},
        }
    )

    return NextResponse.json({user})
}


// update a user
export async function PATCH(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params
    const body = await request.json();

    if(!!body.phoneNumber) {
        body.phoneNumber = !!body.phoneNumber ? (!body.phoneNumber.includes("+") ? ("+" + body.phoneNumber) : body.phoneNumber) : null
    }

    // @ts-ignore
    const user = await prisma.User.update({
        where: {id: +id},
        data: {
            ...body,
        },
    });

    return NextResponse.json({user});
}