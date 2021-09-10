class CreateSolutions < ActiveRecord::Migration[6.0]
  def change
    create_table :solutions do |t|
      t.text :content
      t.integer :user_id
      t.integer :problem_id

      t.timestamps
    end
  end
end
