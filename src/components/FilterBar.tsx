import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from 'lucide-react';

export const FilterBar = () => {
  return (
    <div className="bg-card border-b border-border py-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Período:</span>
          </div>
          
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">Últimos 30 dias</SelectItem>
              <SelectItem value="90days">Últimos 90 dias</SelectItem>
              <SelectItem value="year">Último ano</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Segmento:</span>
          </div>
          
          <Select defaultValue="total">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Selecione o segmento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="total">Total</SelectItem>
              <SelectItem value="leisure">Lazer</SelectItem>
              <SelectItem value="business">Negócios</SelectItem>
            </SelectContent>
          </Select>

          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  );
};