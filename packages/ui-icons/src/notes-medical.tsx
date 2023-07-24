import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * NotesMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const NotesMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNotesMedical} {...props} />;
};

export default NotesMedical;
