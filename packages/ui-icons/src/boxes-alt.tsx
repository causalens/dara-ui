import { faBoxesAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoxesAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoxesAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxesAlt} {...props} />;
};

export default BoxesAlt;
