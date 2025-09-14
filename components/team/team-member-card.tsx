import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TeamMember } from '@/lib/team-data'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
        <p className="text-primary">{member.role}</p>
        <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
      </CardContent>
    </Card>
  )
}
