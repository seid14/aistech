import { collection, addDoc, serverTimestamp, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './config';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id?: string;
  submittedAt: Date;
  status: 'new' | 'read' | 'responded';
  ipAddress?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  try {
    const contactSubmission: Omit<ContactSubmission, 'id'> = {
      ...formData,
      submittedAt: serverTimestamp() as any,
      status: 'new'
    };

    const docRef = await addDoc(collection(db, 'contacts'), contactSubmission);

    return docRef.id;
  } catch (error) {
    throw new Error('Failed to submit contact form. Please try again.');
  }
};

export const getContactSubmissions = async (): Promise<ContactSubmission[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'contacts'));
    const submissions: ContactSubmission[] = [];

    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data()
      } as ContactSubmission);
    });

    return submissions;
  } catch (error) {
    throw new Error('Failed to fetch contact submissions');
  }
};

// Helper function to update contact status
export const updateContactStatus = async (contactId: string, status: 'new' | 'read' | 'responded') => {
  try {
    const contactRef = doc(db, 'contacts', contactId);
    await updateDoc(contactRef, {
      status: status,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    throw new Error('Failed to update contact status');
  }
};

// Test function to verify Firebase connection and data
export const testFirebaseConnection = async () => {
  try {
    // Try to get all contacts
    const contacts = await getContactSubmissions();

    return { success: true, contactCount: contacts.length, contacts };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
};
