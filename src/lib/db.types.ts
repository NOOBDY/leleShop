export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      trade: {
        Row: {
          artist_name: string | null
          discount: number | null
          id: number
          item_name: string | null
          net_sales: number | null
          quantity: number | null
          state: string | null
          total_sales: number | null
          trade_date: string | null
          trade_id: string | null
        }
        Insert: {
          artist_name?: string | null
          discount?: number | null
          id?: never
          item_name?: string | null
          net_sales?: number | null
          quantity?: number | null
          state?: string | null
          total_sales?: number | null
          trade_date?: string | null
          trade_id?: string | null
        }
        Update: {
          artist_name?: string | null
          discount?: number | null
          id?: never
          item_name?: string | null
          net_sales?: number | null
          quantity?: number | null
          state?: string | null
          total_sales?: number | null
          trade_date?: string | null
          trade_id?: string | null
        }
        Relationships: []
      }
      trade_body: {
        Row: {
          artist_name: string | null
          discount: number | null
          id: number
          item_name: string | null
          net_sales: number | null
          quantity: number | null
          total_sales: number | null
          trade_id: string | null
        }
        Insert: {
          artist_name?: string | null
          discount?: number | null
          id?: never
          item_name?: string | null
          net_sales?: number | null
          quantity?: number | null
          total_sales?: number | null
          trade_id?: string | null
        }
        Update: {
          artist_name?: string | null
          discount?: number | null
          id?: never
          item_name?: string | null
          net_sales?: number | null
          quantity?: number | null
          total_sales?: number | null
          trade_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trade_body_trade_id_fkey"
            columns: ["trade_id"]
            isOneToOne: false
            referencedRelation: "trade_head"
            referencedColumns: ["trade_id"]
          }
        ]
      }
      trade_head: {
        Row: {
          state: string | null
          trade_date: string | null
          trade_id: string
        }
        Insert: {
          state?: string | null
          trade_date?: string | null
          trade_id: string
        }
        Update: {
          state?: string | null
          trade_date?: string | null
          trade_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
