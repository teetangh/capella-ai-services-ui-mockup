'use client';
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronDown } from 'lucide-react';

interface ConfigurationStepProps {
  stepNumber: number;
  title: string;
  isExpanded: boolean;
  isCompleted: boolean;
  onToggle: () => void;
  onComplete: () => void;
  onAdvanceToNext?: () => void;
  children: ReactNode;
}

export default function ConfigurationStep({
  stepNumber,
  title,
  isExpanded,
  isCompleted,
  onToggle,
  onComplete,
  onAdvanceToNext,
  children
}: ConfigurationStepProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="p-3 lg:p-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onToggle}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
            isCompleted
              ? 'bg-gray-600 text-white'
              : 'bg-gray-800 text-white'
          }`}>
            {isCompleted ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              stepNumber
            )}
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="p-4 lg:p-6 pt-0">
          <div className="transition-all duration-300 ease-in-out">
            {/* Accent Border Container */}
            <div className="border-2 border-gray-800 bg-gray-50 rounded-lg p-6">
              {children}

              {/* Done Button */}
              <div className="mt-6 flex justify-end">
                <Button
                  className="flex items-center gap-2"
                  onClick={() => {
                    onComplete();
                    if (onAdvanceToNext && !isCompleted) {
                      onAdvanceToNext();
                    }
                  }}
                  disabled={isCompleted}
                >
                  <CheckCircle className="w-4 h-4" />
                  {isCompleted ? 'Completed' : 'Done'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}