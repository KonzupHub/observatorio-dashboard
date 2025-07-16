import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from 'lucide-react';

export const FilterBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-6 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Período:</span>
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
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Segmento:</span>
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

          <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  );
};