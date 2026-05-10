// features/formations/data/mappers/formation.mapper.ts
import { Formation, Module } from '../../domain/entities/formation.entity'
import { FormationDTO, ModuleDTO } from '../dto/formation.dto'

export class FormationMapper {
  static toDomain(dto: FormationDTO): Formation {
    return {
      id: dto.id,
      title: dto.title,
      slug: dto.slug,
      description: dto.description,
      longDescription: dto.longDescription,
      image: dto.image,
      duration: dto.duration,
      price: dto.price,
      modules: dto.modules.map(module => FormationMapper.moduleToDomain(module)),
      prerequisites: dto.prerequisites,
      objectives: dto.objectives,
      certification: dto.certification,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    }
  }

  static moduleToDomain(dto: ModuleDTO): Module {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      duration: dto.duration,
      topics: dto.topics,
      order: dto.order,
    }
  }

  static toDTO(domain: Formation): FormationDTO {
    return {
      id: domain.id,
      title: domain.title,
      slug: domain.slug,
      description: domain.description,
      longDescription: domain.longDescription,
      image: domain.image,
      duration: domain.duration,
      price: domain.price,
      modules: domain.modules.map(module => FormationMapper.moduleToDTO(module)),
      prerequisites: domain.prerequisites,
      objectives: domain.objectives,
      certification: domain.certification,
      createdAt: domain.createdAt.toISOString(),
      updatedAt: domain.updatedAt.toISOString(),
    }
  }

  static moduleToDTO(domain: Module): ModuleDTO {
    return {
      id: domain.id,
      title: domain.title,
      description: domain.description,
      duration: domain.duration,
      topics: domain.topics,
      order: domain.order,
    }
  }
}