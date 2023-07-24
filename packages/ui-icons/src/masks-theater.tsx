import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MasksTheater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MasksTheater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMasksTheater} {...props} />;
};

export default MasksTheater;
