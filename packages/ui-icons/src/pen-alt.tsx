import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenAlt} {...props} />;
};

export default PenAlt;
