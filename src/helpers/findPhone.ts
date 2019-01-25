export const findPhone = (phones: [{ country: string, number: number, validated_at: string }]) => {
    let max = phones[0];
    phones.forEach((phone: { country: string, number: number, validated_at: string }) => {
        if (max.validated_at === null || phone.validated_at !== null
            && phone.validated_at > max.validated_at) {
            max = phone;
        }
    });
    return max;
};
