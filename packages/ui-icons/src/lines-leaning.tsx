import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LinesLeaning icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LinesLeaning = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLinesLeaning} {...props} />;
};

export default LinesLeaning;
